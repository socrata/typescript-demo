interface Post {
  id: number;
  title: string;
  author: string;
  likes?: number;
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  tags?: string[];
}

export function getComments(postId: number): Promise<Comment[]> {
  return fetch(`/api/posts/${1}/comments`).then(r => r.json());
}

// TODO: create a Profile type and an async function that calls
// the profiles index route (/api/profiles). Add the function to
// the componentDidMount method of the ProfileTable component (use
// LameForm component as a model if you need some help)
