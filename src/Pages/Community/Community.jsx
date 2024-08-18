import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllPost } from '../../Api/Api';
import Loading from '../../Shared/Loading/Loading';
import { FaThumbsUp } from "react-icons/fa";
import PostCard from './PostCard';

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
    <div className="bg-gray-100 min-h-screen py-2 px-4">
      <div className="max-w-2xl mx-auto">
        {articles.map((article) => (
          <PostCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
export default Community;