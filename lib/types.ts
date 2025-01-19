// Fakestoreapi
export type FsaProductType = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
    count: string;
  };
};

// Jikananime
export type AnimeList = {
  pagination?: { last_visible_page: number; items: { total: number } };
  data: AnimeListData[];
};

export type AnimeListData = {
  mal_id: string;
  title: string;
  images: { jpg: { image_url: string } };
  synopsis?: string;
  year?: string;
  episodes?: string;
  source?: string;
  status?: string;
  type?: string;
  duration?: string;
  rank?: string;
  aired?: { string: string };
  season?: string;
  producers?: { url: string; mal_id: string; name: string }[];
  genres?: { url: string; mal_id: string; name: string }[];
  trailer?: { youtube_id: string; url: string; embed_url: string };
};

export type AnimeListDataEntry = {
  mal_id: string;
  title: string;
  images: { jpg: { image_url: string } };
  url: string;
};

export type RecommendationList = {
  pagination?: { last_visible_page: number };
  data: {
    mal_id: string;
    title: string;
    images: { jpg: { image_url: string } };
    entry: AnimeListDataEntry;
  }[];
};

// Mediastack
export type MsNewsType = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  published_at: string;
};

// Newsapi
// export interface NaNewsTypes {
//   url: string;
//   urlToImage: string;
//   description: string;
//   title: string;
//   publishedAt: string;
//   author: string;
//   content: string;
// }

// Omdbapi
export type OmdbSearchType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  // Actors: string;
  // Country: string;
  // Genre: string;
  // Released: string;
  // Runtime: string;
  // imdbRating: string;
  // Writer: string;
  // Plot: string;
};

// Reqres
export type ReqresUserType = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// Tmdb
export type TmdbMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};

// Sisko
export interface SiskoProductType {
  id: string;
  name: string;
  photo: string;
  price: string;
  weight: string;
}

export interface SiskoCartItems extends SiskoProductType {
  qty: number;
  createdAt: string;
  weight: string;
  checked: boolean;
}

export interface SiskoProductSingle {
  product_id: string;
  product_name: string;
  product_img: string;
  product_price: string;
  product_status: string;
  product_description: string;
  product_code: string;
  product_buy_price: string;
  product_weight: string;
  variant_kewyord_id: number;
  variant_kewyord_value: string;
}
