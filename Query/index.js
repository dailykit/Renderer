const axios = require("axios");
const getFilePath = async (ids) => {
  const pathArray = await Promise.all(
    ids.map(async (ids) => {
      try {
        const { data, status } = await axios({
          url: process.env.DATA_HUB_URI,,
          method: "POST",
          headers: {
            "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
          },
          data: {
            query: `
            query GetFilePath($id: [Int!]!) {
                editor_file(where: {id: {_in: $id}}) {
                  path
                }
              }
              
                      
                   `,
            variables: {
              id: ids,
            },
          },
        });
        if (status === 200) {
          console.log(data);
          const result = data.data.editor_file.map((file) => {
            return file.path;
          });
          console.log(result);
          return result;
        }
      } catch (error) {
        console.log("catch");
        console.log(error);
      }
    })
  );
  return pathArray;
};

module.exports = { getFilePath };
