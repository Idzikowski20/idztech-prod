import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useFirebaseBlogPosts } from '@/hooks/useFirebaseBlogPosts';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate } from '@/utils/dateUtils';
import { Helmet } from 'react-helmet-async';
import GlobalCTA from '@/components/GlobalCTA';

const Blog = () => {
  const { posts, isLoadingPosts, error } = useFirebaseBlogPosts();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log("Blog component mounted");
  }, []);

  useEffect(() => {
    if (posts) {
      console.log("Posts in component:", posts);
    }
  }, [posts]);

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-premium-dark">
      <Helmet>
        <title>IDZTECH - Dev blog</title>
        <meta name="description" content="Najnowsze informacje, porady i trendy ze świata IT." />
        {/* Open Graph */}
        <meta property="og:title" content="IDZTECH - Dev blog" />
        <meta property="og:description" content="Najnowsze informacje, porady i trendy ze świata IT." />
        <meta property="og:image" content="https://idztech.pl/banner.png" />
        <meta property="og:url" content="https://idztech.pl/blog" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IDZTECH - Dev blog" />
        <meta name="twitter:description" content="Najnowsze informacje, porady i trendy ze świata IT." />
        <meta name="twitter:image" content="https://idztech.pl/banner.png" />
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical */}
        <link rel="canonical" href="https://idztech.pl/blog" />
        {/* Schema.org Organization */}
        <script type="application/ld+json">{`
          {"@context": "https://schema.org","@type": "Organization","name": "IDZTECH","url": "https://idztech.pl","logo": "https://idztech.pl/logo.png"}
        `}</script>
      </Helmet>
      
      <Navbar />
      
      {/* Hero section - simplified with CyberFolks style */}
      <section className="pt-32 pb-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dev blog.</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Najnowsze informacje, porady i trendy ze świata IT. 
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog posts grid - Updated design matching reference image */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {isLoadingPosts ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex flex-col">
                  <Skeleton className="h-52 w-full rounded-xl mb-4" />
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-gray-400 py-12">
              <p className="text-xl mb-4">Wystąpił błąd podczas ładowania postów.</p>
              <p className="mb-4">Spróbuj odświeżyć stronę lub sprawdź połączenie internetowe.</p>
              <Button onClick={() => window.location.reload()} variant="outline">Odśwież stronę</Button>
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => post.published).map((post) => (
                <article 
                  key={post.id} 
                  className="group bg-transparent cursor-pointer"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <div className="block overflow-hidden rounded-2xl mb-4">
                    <img 
                      src={post.featured_image || '/placeholder.svg'} 
                      alt={post.title} 
                      className="w-full h-64 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(post.created_at)}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-premium-purple group-hover:underline transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-3 line-clamp-2">
                    {post.excerpt || post.summary || 'Brak opisu'}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p className="text-xl mb-4">Brak postów do wyświetlenia.</p>
              <p>Wróć później, gdy pojawią się nowe artykuły.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <GlobalCTA
        title="Potrzebujesz profesjonalnych usług SEO?"
        description="Skontaktuj się z nami, aby omówić jak możemy pomóc Twojej stronie osiągnąć lepsze wyniki w wyszukiwarkach."
        buttons={[
          <Button className="bg-premium-gradient hover:bg-premium-purple hover:text-white" key="cta-blog">
            Skontaktuj się z nami
          </Button>
        ]}
      />
      
      <Footer />
    </div>
  );
};

export default Blog;
