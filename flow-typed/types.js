// @flow

export type Show = {
  title: string,
  description: string,
  imdbID: string,
  year: string,
  trailer: string,
  poster: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

