import app from "./app";
import GraphqlServer from "./graphql/GraphqlServer";

GraphqlServer.listen().then(({ url }) => console.log(`GALHARDO FINANCES GraphqlServer running on => ${url}`));

app.listen(process.env.PORT || 3333, () =>
    console.log(
        `GALHARDO FINANCES HTTP REST API server is running at ${process.env.API_URL}:${process.env.PORT ?? 3333}`,
    ),
);
