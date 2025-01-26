
export interface Post {
    id:  number;
    title: string;
    content: string;
    comments: Comment[];
   
}
export interface CreatePostDto {
    title: string;
    content: string;
    
}

export interface UpdatePostDto {
    title?: string;
    content?: string;}
    export   interface Comment {
        id: number;
        text: string;
        name: string;
      }

      
      export interface PostProps {
        post: Post;
      }
