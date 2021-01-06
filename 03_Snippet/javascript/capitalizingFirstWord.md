"useState": {
    "prefix": "useState",
    "body": [
      "const [${1:state}, set${1/(.*)/${1:/capitalize}/}] = useState(${2:initialState})"
    ]
  }