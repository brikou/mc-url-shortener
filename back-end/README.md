**Create a new short URL**

```sh
http POST http://localhost:4000/graphql query='
    mutation {
        createUrl(createUrlInput: { link: "http://foo.com" }) { key, link }
    }
'
```

**Get all short URLs**

```sh
http POST http://localhost:4000/graphql query='
    query {
        urls { key, link }
    }
'
```

**Get a single short URL**

```sh
http POST http://localhost:4000/graphql query='
    query {
        url(key: "pKf4XE") { key, link }
    }
'
```

**Use the short URL**

```sh
http http://localhost:4000/urls/abc123

# HTTP/1.1 302 Found
# Location: http://foo.com
#
# Found. Redirecting to https://www.example.com
```
