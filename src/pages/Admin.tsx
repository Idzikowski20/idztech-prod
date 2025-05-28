import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Search, ArrowUpDown, BarChart2 } from 'lucide-react';
import { useAuth } from '@/utils/firebaseAuth';
import { Button } from '@/components/ui/button';
import { db } from '@/integrations/firebase/client';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import AdminLayout from '@/components/AdminLayout';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
// import { useToast } from '@/hooks/use-toast';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import AdminAIButton from '@/components/AdminAIButton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from '@/utils/themeContext';
import Notification from '@/components/ui/Notification';
import { useNotification } from '@/components/ui/NotificationContext';

const API_BASE = 'https://idztech.onrender.com';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  content: string;
  featured_image: string;
  excerpt: string | null;
  published: boolean;
  published_at: string | null;
  updated_at: string;
}

interface APIUsage {
  api_name: string;
  total_requests: number;
  last_used: string;
  limit: number;
}

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  // const { toast } = useToast();
  const { theme } = useTheme();
  const { showNotification } = useNotification();
  
  // State for blog posts
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Sorting and filtering state
  const [sortField, setSortField] = useState<'title' | 'date'>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  
  // Pagination state
  const [currentPostsPage, setCurrentPostsPage] = useState(1);
  const postsPerPage = 5;
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [sitemapLastUpdate, setSitemapLastUpdate] = useState<string | null>(null);
  const [isGeneratingSitemap, setIsGeneratingSitemap] = useState(false);
  const [activeTab, setActiveTab] = useState<'posts' | 'usage'>('posts');
  const [apiUsage, setApiUsage] = useState<APIUsage[]>([]);
  const [loadingUsage, setLoadingUsage] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (activeTab === 'posts') {
      fetchPosts();
    } else {
      fetchApiUsage();
    }
  }, [user, navigate, activeTab]);

  const fetchPosts = async () => {
    try {
      setLoadingPosts(true);
      const postsCollection = collection(db, 'blog_posts');
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setPosts(postsList);
    } catch (err) {
      setError('Błąd podczas pobierania postów');
      console.error(err);
    } finally {
      setLoadingPosts(false);
    }
  };

  const fetchApiUsage = async () => {
    try {
      setLoadingUsage(true);
      const response = await fetch(`${API_BASE}/api/usage`);
      const data = await response.json();
      setApiUsage(data);
    } catch (err) {
      setError('Błąd podczas pobierania statystyk użycia API');
      console.error(err);
    } finally {
      setLoadingUsage(false);
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Data niedostępna';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      return date.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Data niedostępna';
    }
  };

  const handleStatusChange = async (postId: string, newStatus: boolean) => {
    try {
      const postRef = doc(db, 'blog_posts', postId);
      await updateDoc(postRef, {
        published: newStatus,
        published_at: newStatus ? new Date().toISOString() : null
      });
      
      setPosts(posts.map(post => 
        post.id === postId 
          ? { ...post, published: newStatus, published_at: newStatus ? new Date().toISOString() : null }
          : post
      ));
      
      showNotification({ sender: 'IDZTECH', message: `Post został ${newStatus ? 'opublikowany' : 'oznaczony jako szkic'}.` });
    } catch (err) {
      console.error(err);
      showNotification({ sender: 'IDZTECH', message: 'Nie udało się zmienić statusu posta.' });
    }
  };

  // Filtering and sorting posts
  useEffect(() => {
    if (!Array.isArray(posts)) {
      setFilteredPosts([]);
      return;
    }

    let filtered = [...posts];

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(post => 
        statusFilter === 'published' ? post.published : !post.published
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortField === 'title') {
        return sortDirection === 'asc' 
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else {
        // Sortuj po published_at jeśli istnieje, w przeciwnym razie po created_at
        const dateA = new Date(a.published_at || a.created_at).getTime();
        const dateB = new Date(b.published_at || b.created_at).getTime();
        return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }
    });

    setFilteredPosts(filtered);
  }, [posts, searchTerm, sortField, sortDirection, statusFilter]);
  
  // Calculate pagination
  const postsStartIndex = (currentPostsPage - 1) * postsPerPage;
  const postsEndIndex = postsStartIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(postsStartIndex, postsEndIndex);
  
  const totalPostsPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handleDelete = async (postId: string) => {
    if (!window.confirm('Czy na pewno chcesz usunąć ten post?')) {
      return;
    }
    try {
      await deleteDoc(doc(db, 'blog_posts', postId));
      setPosts(posts.filter(post => post.id !== postId));
      showNotification({ sender: 'IDZTECH', message: 'Post został usunięty.' });
    } catch (err) {
      setError('Błąd podczas usuwania postu');
      console.error(err);
      showNotification({ sender: 'IDZTECH', message: 'Nie udało się usunąć posta.' });
    }
  };

  const handleGenerateSitemap = async () => {
    setIsGeneratingSitemap(true);
    try {
      const res = await fetch(`${API_BASE}/api/generate-sitemap`, { method: 'POST' });
      if (!res.ok) throw new Error('Błąd generowania sitemap');
      const updateRes = await fetch(`${API_BASE}/api/sitemap-last-update`);
      const updateData = await updateRes.json();
      setSitemapLastUpdate(updateData.lastUpdate);
      showNotification({ sender: 'IDZTECH', message: 'Sitemap została zaktualizowana.' });
    } catch (err) {
      showNotification({ sender: 'IDZTECH', message: 'Nie udało się wygenerować sitemap.' });
    } finally {
      setIsGeneratingSitemap(false);
    }
  };

  if (loadingPosts) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-t-4 border-premium-purple border-solid mb-6"></div>
          <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg font-semibold`}>Ładowanie...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel Administracyjny</h1>
          <div className="flex space-x-4">
            <Button
              variant={activeTab === 'posts' ? 'default' : 'outline'}
              onClick={() => setActiveTab('posts')}
            >
              Posty
            </Button>
            <Button
              variant={activeTab === 'usage' ? 'default' : 'outline'}
              onClick={() => setActiveTab('usage')}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Zużycia
            </Button>
          </div>
        </div>

        {activeTab === 'posts' ? (
          <div className="p-6">
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
                <p className="text-gray-600 dark:text-gray-400">Zarządzaj treścią, ustawieniami i danymi.</p>
              </div>
            </div>

            {/* Blog Posts Management */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2 gap-4 flex-wrap">
                <h2 className="text-xl font-bold">Blog</h2>
              </div>
              <div className="flex items-center justify-end mb-6">
                <div className="flex gap-4">
                  <Button size="sm" onClick={handleGenerateSitemap} disabled={isGeneratingSitemap} className={`bg-premium-gradient hover:text-white hover:scale-105 ${theme !== 'dark' ? 'text-white' : ''}`}>
                    {isGeneratingSitemap ? 'Generowanie...' : 'Generuj sitemapę'}
                  </Button>
                  <div className="flex items-center gap-4">
                    <Select
                      value={statusFilter}
                      onValueChange={(value: 'all' | 'published' | 'draft') => setStatusFilter(value)}
                    >
                      <SelectTrigger className="w-[180px] dark:bg-transparent bg-white">
                        <SelectValue placeholder="Filtruj po statusie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Wszystkie</SelectItem>
                        <SelectItem value="published">Opublikowane</SelectItem>
                        <SelectItem value="draft">Szkice</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-premium-light/50" size={16} />
                      <Input
                        placeholder="Wyszukaj po tytule..."
                        className="pl-10 bg-premium-dark/30 border-premium-light/10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <Button onClick={() => navigate('/admin/new-post')} className={`bg-premium-gradient hover:text-white hover:scale-105 ${theme !== 'dark' ? 'text-white' : ''}`}>
                    <Plus size={16} className="mr-2" /> Dodaj nowy post
                  </Button>
                  <Button onClick={() => navigate('/admin/ai-post')} className={`bg-premium-gradient hover:text-white hover:scale-105 ${theme !== 'dark' ? 'text-white' : ''}`}>
                    <Plus size={16} className="mr-2" /> Generuj z AI
                  </Button>
                </div>
              </div>

              <div className="bg-premium-dark/50 border border-premium-light/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className=" border-premium-light/10 sticky top-0 bg-transparent z-10">
                      <tr>
                        <th className={`py-2 sm:py-3 px-2 sm:px-4 text-left whitespace-nowrap border-l border-r border-gray-400/20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          <Button
                            variant="ghost"
                            className="hover:bg-transparent p-0"
                            onClick={() => {
                              if (sortField === 'title') {
                                setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                              } else {
                                setSortField('title');
                                setSortDirection('asc');
                              }
                            }}
                          >
                            Tytuł
                            <ArrowUpDown size={16} className="ml-2" />
                          </Button>
                        </th>
                        <th className={`py-2 sm:py-3 px-2 sm:px-4 text-left whitespace-nowrap  border-l border-r border-gray-400/20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                          <Button
                            variant="ghost"
                            className="hover:bg-transparent p-0"
                            onClick={() => {
                              if (sortField === 'date') {
                                setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
                              } else {
                                setSortField('date');
                                setSortDirection('desc');
                              }
                            }}
                          >
                            Data
                            <ArrowUpDown size={16} className="ml-2" />
                          </Button>
                        </th>
                        <th className={`py-2 sm:py-3 px-2 sm:px-4 text-left whitespace-nowrap  border-l border-r border-gray-400/20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Status</th>
                        <th className={`py-2 sm:py-3 px-2 sm:px-4 text-left whitespace-nowrap  border-l border-r border-gray-400/20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Akcje</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-premium-light/10">
                      {loadingPosts ? (
                        null
                      ) : filteredPosts.length === 0 ? (
                        <tr>
                          <td className="py-4 px-4 text-left text-premium-light/70" colSpan={4}>
                            {searchTerm ? 'Brak wyników wyszukiwania' : 'Brak postów. Dodaj pierwszy post, aby zacząć.'}
                          </td>
                        </tr>
                      ) : (
                        paginatedPosts.map(post => (
                          <tr key={post.id}>
                            <td className={`py-2 sm:py-3 px-2 sm:px-4 font-medium break-words max-w-[180px] text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{post.title}</td>
                            <td className={`py-2 sm:py-3 px-2 sm:px-4 text-left ${theme === 'dark' ? 'text-premium-light/70' : 'text-gray-600'}`}>
                              {post.published 
                                ? formatDate(post.published_at || post.created_at)
                                : formatDate(post.created_at)}
                            </td>
                            <td className={`py-2 sm:py-3 px-2 sm:px-4 text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                              <button
                                onClick={() => handleStatusChange(post.id, !post.published)}
                                className={`${post.published ? 'status-published' : 'status-draft'} cursor-pointer transition-transform hover:scale-105`}
                              >
                                {post.published ? 'Opublikowany' : 'Szkic'}
                              </button>
                            </td>
                            <td className={`py-2 sm:py-3 px-2 sm:px-4 text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                              <div className="flex items-center space-x-2 justify-center">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => navigate(`/blog/${post.slug}`)}
                                  className="admin-action-btn view border-radius999"
                                >
                                  <Eye size={14} />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => navigate(`/admin/edit-post/${post.id}`)}
                                  className="admin-action-btn edit border-radius999"
                                >
                                  <Edit size={14} />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDelete(post.id)}
                                  className="admin-action-btn delete border-radius999"
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                
                {/* Blog Posts Pagination */}
                {totalPostsPages > 1 && (
                  <div className="flex justify-center py-4">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => setCurrentPostsPage(prev => Math.max(prev - 1, 1))}
                            className={
                              currentPostsPage === 1
                                ? 'pointer-events-none opacity-50'
                                : `${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline`
                            }
                          />
                        </PaginationItem>
                        
                        {Array.from({length: Math.min(totalPostsPages, 5)}, (_, i) => {
                          // Display logic for page numbers
                          let pageNum;
                          if (totalPostsPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPostsPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPostsPage >= totalPostsPages - 2) {
                            pageNum = totalPostsPages - 4 + i;
                          } else {
                            pageNum = currentPostsPage - 2 + i;
                          }
                          
                          return (
                            <PaginationItem key={i}>
                              <PaginationLink
                                onClick={() => setCurrentPostsPage(pageNum)}
                                isActive={currentPostsPage === pageNum}
                                className={
                                  currentPostsPage === pageNum
                                    ? `${theme === 'dark' ? 'bg-premium-dark text-white border border-premium-light/10' : 'bg-white text-black border border-gray-300'} !shadow-none`
                                    : `${theme === 'dark' ? 'text-white' : 'text-black'} hover:bg-premium-light/10`
                                }
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}
                        
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => setCurrentPostsPage(prev => Math.min(prev + 1, totalPostsPages))}
                            className={
                              currentPostsPage === totalPostsPages
                                ? 'pointer-events-none opacity-50'
                                : `${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline`
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Statystyki użycia API</h2>
            {loadingUsage ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center">{error}</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {apiUsage.map((usage) => (
                  <div
                    key={usage.api_name}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold mb-2">{usage.api_name}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Zużyte zapytania:</span>
                        <span className="font-medium">{usage.total_requests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Limit:</span>
                        <span className="font-medium">{usage.limit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Ostatnie użycie:</span>
                        <span className="font-medium">{formatDate(usage.last_used)}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mt-4">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${(usage.total_requests / usage.limit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Admin;
