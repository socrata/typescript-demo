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
}

export function getComments(postId: number): Promise<Comment[]> {
  return fetch(`/api/posts/${1}/comments`).then(r => r.json());
}
