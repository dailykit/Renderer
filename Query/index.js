const axios = require("axios");
const getFilePath = async (ids, config) => {
  const pathArray = await Promise.all(
    ids.map(async (ids) => {
      try {
        const { data, status } = await axios({
          url: config.uri,
          method: "POST",
          headers: {
            "x-hasura-admin-secret": config.adminSecret,
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
          const result = data.data.editor_file.map((file) => {
            return file.path;
          });
          return result;
        }
      } catch (error) {
        console.log(error);
      }
    })
  );
  return pathArray;
};

module.exports = { getFilePath };
