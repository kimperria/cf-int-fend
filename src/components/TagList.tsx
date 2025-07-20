import { Badge } from "./ui/badge";

// Component props to implement type safety
interface TagListProps {
  title: string;
  tags: string[];
}

// Reusable component that displays a list of tags under a title
export default function TagList({ title, tags }: TagListProps) {
  return (
    <div className="mt-8 px-6 max-w-5xl mx-auto">
      <div className="text-white text-lg font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge
            key={index}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
