
import { Check } from 'lucide-react';

const DocumentsList = ({ title, documents }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <ul className="space-y-3">
        {documents.map((doc) => (
          <li key={doc.id} className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2 mt-0.5">
              <Check className="w-3 h-3 text-white" />
            </span>
            <span className="text-gray-700">{doc.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;
