/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import DOMPurify from "dompurify";
import useAuth from "../../Hooks/useAuth";
import "./PostCard.css";

const PostCard = ({ article }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showFullContent, setShowFullContent] = useState(false); // New state for content toggle
  const { user } = useAuth();

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setHasLiked(!hasLiked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // Determine if the content is long enough to be truncated
  const isContentLong = article?.content?.length > 350;
  const displayedContent = showFullContent
    ? article.content
    : article.content.substring(0, 350);

  return (
    <div className="bg-white shadow  p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={article?.author?.photo}
          alt={article?.author?.name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="font-bold text-gray-800">{article.author.name}</p>
          <p className="text-sm text-gray-500">
            {new Date(article?.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {article?.title}
      </h2>
      {article?.image && (
        <img
          src={article?.image}
          alt={article?.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <div>
        <p
          className="post-content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(displayedContent),
          }}
        ></p>
        {isContentLong && (
          <button
            onClick={toggleContent}
            className="text-indigo-600 hover:underline mt-2"
          >
            {showFullContent ? "See less" : "See more..."}
          </button>
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleLike}
          className={`flex items-center ${
            hasLiked ? "text-blue-600" : "text-gray-600"
          } hover:text-indigo-800`}
        >
          <FaThumbsUp className="mr-2" />
          {hasLiked ? "Liked" : "Like"}{" "}
          {likeCount > 0 && <span>({likeCount})</span>}
        </button>
      </div>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-indigo-700"
        >
          Comment
        </button>
      </form>
      <div className="mt-4">
        {comments.map((cmt, index) => (
          <p key={index} className="text-gray-600 mt-2">
            {cmt}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
