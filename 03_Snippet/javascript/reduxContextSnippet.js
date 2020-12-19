  "dereje redux action creator": {
    "prefix": "daction-axios",
    "body": [
"  const $1 = async ($1) => {",
"    const config = {",
"      headers: {",
"        'Content-Type': 'application/json',",
"      },",
"     }",
"    try {",
"      const res = await axios.${2:get}('/api/$3', $4, config)",
"      dispatch({",
"        type: $5_$6,",
"        payload: res.data,",
"      })",
"    } catch (err) {",
"      dispatch({",
"        type: $6_ERROR,",
"        payload: err.response.msg,",
"      })",
"    }",
"  }",
    "$7"
        ],
    "description": "context Action creator "
},
  "dereje redux action creator simple": {
    "prefix": "daction-simple",
    "body": [
"    const $1 = ($2) => {",
"      dispatch({ type: $3, ${4:payload:} $2 });",
"    };",
    "$5"
        ],
    "description": "context Action creator "
},
