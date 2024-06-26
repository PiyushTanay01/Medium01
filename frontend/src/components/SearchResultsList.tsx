// import { Blog } from './BlogList';
import { SearchResult } from './SearchResult';
import { Link } from 'react-router-dom';

interface Blog {
  authorName:string;
  title:string;
  content:string;
  description:string;
  publishedDate:Date;
  id:number;
}

interface SearchResultsListProps {
  results: Blog[];
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  return (
    
    <div className='absolute top-24 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-4 w-52 shadow-lg z-10'>
      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 h-5 w-5 bg-white rotate-45"></div>
        {
            
            results.map((result)=>{
                return <Link to={`/blog/${result.id}`}>
                <SearchResult result={result} />
                </Link>
            })
        }
    </div>
  );
}
