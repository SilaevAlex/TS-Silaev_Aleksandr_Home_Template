interface Movie {
    name: string;
    releaseYear: number;
    rating: number;
    awards: string[];
  }
  
  interface Category {
    name: string;
    movies: Movie[];
  }

  type MatchFilter = {
    type: 'match';
    filter: string;
  }
  
  type RangeFilter = {
    type: 'range';
    filter: number;
    filterTo: number;
  }
  
  type ValueFilter = {
    type: 'values';
    values: (string[] | number[]);
  }
  
  type Filter = MatchFilter | RangeFilter | ValueFilter;


  class MovieList {
  private movies: Movie[] = [];
  private filters: Filter[] = [];

  constructor(movies: Movie[]) {
    this.movies = movies;
  }

  applySearchValue(value: string): void {
    this.filters.push({ type: 'match', filter: value });
  }

  applyFiltersValue(filter: Filter): void {
    this.filters.push(filter);
  }

  getFilteredMovies(): Movie[] {
    return this.movies.filter(movie => {
      return this.filters.every(filter => {
        switch (filter.type) {
          case 'match':
            return movie.name.includes(filter.filter);
          case 'range':
            return movie.rating >= filter.filter && movie.rating <= filter.filterTo;
          case 'values':
            return filter.values.includes(movie.name);
          default:
            return true;
        }
      });
    });
  }
}
  
class CategoryList {
    private categories: Category[] = [];
    private filters: MatchFilter[] = [];
    constructor(categories: Category[]) {
      this.categories = categories;
    }
  
    applySearchValue(value: string): void {
      this.filters.push({ type: 'match', filter: value });
    }
  
    getFilteredCategories(): Category[] {
      return this.categories.filter(category => {
        return this.filters.every(filter => category.name.includes(filter.filter));
      });
    }
  }
  