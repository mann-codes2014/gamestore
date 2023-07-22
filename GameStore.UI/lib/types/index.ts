export interface Feature {
  title: string;
  content: string;
}
export interface BaseProps {
  title?: string;
  meta_title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
  children?: React.ReactNode;
}
interface AboutUs {
  image: string;
  subtitle: string;
  title: string;
  content: string;
}
interface Work {
  subtitle: string;
  title: string;
  content: string;
  list: object[];
}
interface Mission {
  image: string;
  subtitle: string;
  title: string;
  content: string;
}
interface Video {
  subtitle: string;
  title: string;
  description: string;
  video_id: string;
  thumbnail: string;
}
interface Client {
  subtitle: string;
  title: string;
  brands: string[];
}
interface Member {
  subtitle: string;
  title: string;
  content: string;
  list: object[];
}
interface Office {
  subtitle: string;
  title: string;
  content: string;
  countries: object[];
}
export interface Frontmatter {
  title: string;
  about_us: AboutUs;
  works: Work;
  mission: Mission;
  video: Video;
  clients: Client;
  our_member: Member;
  our_office: Office;
  meta_title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
  layout?: string;
}
export interface CommonPageProps {
  frontmatter: Frontmatter;
  content: string;
}
