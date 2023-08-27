import { gql } from "graphql-request"

export const GET_PAGES = gql `
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql `
  query getPageBySlug ($slug: String!) {
    page(where: {slug: $slug}) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`

export const GET_POSTS = gql `
  query getPosts($first: Int) {
    posts(first: $first) {
      id
      slug
      name
      createdAt
      description {
        html
      }
      image {
        url
        height
        width
      }
    }
  }
`

export const GET_POST_BY_SLUG = gql `
  query getPostBySlug($slug: String) {
    post(where: {slug: $slug}){
      id
      slug
      name
      description {
        html
        text
      }
      image {
        url
        height
        width
      }
      createdAt
    }
  }
`
