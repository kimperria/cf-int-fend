import { Badge } from "./ui/badge";

// Component props
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
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
