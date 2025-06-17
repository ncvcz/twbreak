import { useWindowSize } from "@uidotdev/usehooks";
import { ExternalLinkIcon } from "lucide-react";

interface Props {
  shared?: boolean;
}

export default function WindowDetails({ shared }: Props) {
  const size = useWindowSize();

  const handleShare = () => {
    const str = btoa(`${size.width},${size.height}`);
    window.location.href = `${window.location.origin}/${str}`;
  }

  return (
    <div className="flex items-center space-x-1.5 text-lg">
      <h2>
        {shared ? "The shared screen measures " : "Your screen measures "}
        <span className="font-mono font-semibold">
          {size.width}x{size.height}
        </span>{" "}
        pixels
      </h2>

      {!shared && (
        <button
          className="cursor-pointer"
          onClick={handleShare}
        >
          <ExternalLinkIcon width={18} height={18} />
        </button>
      )}
    </div>
  );
}
