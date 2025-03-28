export type ExplanationItem = {
  title: string;
  desc: string[];
  image: string;
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  slug: string;
  explanations: ExplanationItem[];
};
