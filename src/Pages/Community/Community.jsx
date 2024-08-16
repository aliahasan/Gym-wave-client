import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllPost } from '../../Api/Api';
import Loading from '../../Shared/Loading/Loading';

const Community = () => {
    const {
      data: articles = [],
      isLoading,
      error,
    } = useQuery({
      queryKey: ["articles"],
      queryFn: getAllPost,
    });
  
    if (isLoading) return <Loading />;
    if (error) return <div>Error loading articles: {error.message}</div>;
  
    return (
        <div>
            {articles.map((article) => (
                <div key={article.id}> {/* Ensure to use a unique key for each item */}
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Community;
