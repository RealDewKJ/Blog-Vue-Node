export interface Post {
    postID: number;
    title: string;
    content: string;
    subContent: string;
    specialContent: string;
    public: boolean;
    imageUrl?: string; 
    subImageUrl?: string; 
    createdAt: Date;
    user: {
      firstname: string;
      lastname: string;
      email: string;
      isAdmin: boolean;
      imageUrl: string;      
    }
  }