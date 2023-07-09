import { slug } from "github-slugger";
import { marked } from 'marked'

// slugify
export const slugify = (content: string): string | null => {
  if (!content) return null;

  return slug(content);
};

// markdownify
export const markdownify = (
  content: string,
  tag?: string,
  className?: string
): JSX.Element | null => {
  if (!content) return null;

  const Tag = tag || "span";
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{
        __html:
          tag === "div"
            ? marked.parse(content)
            : marked.parseInline(content),
      }}
    />
  );
};

// humanize
export const humanize = (content: string): string | null => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, (m) => {
      return m.toUpperCase();
    });
};

// plainify
export const plainify = (content: string): string | undefined => {
  if (!content) return undefined;

  const mdParsed = marked.parseInline(String(content));
  const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities: string): string => {
  let entityList: Record<string, string> = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};
