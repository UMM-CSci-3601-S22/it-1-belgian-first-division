package umm3601.product;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;

import java.util.ArrayList;
import java.util.List;
//import java.util.Map;
//import java.util.Objects;

import com.mongodb.client.MongoDatabase;
//import com.mongodb.client.model.Sorts;

import org.bson.Document;
import org.bson.UuidRepresentation;
import org.bson.conversions.Bson;
//import org.bson.types.ObjectId;
import org.mongojack.JacksonMongoCollection;

//import io.javalin.http.BadRequestResponse;
import io.javalin.http.Context;
// import io.javalin.http.HttpCode;
// import io.javalin.http.NotFoundResponse;

public class ProductController {

  private static final String NAME_KEY = "name";
  //private static final String BRAND_KEY = "brand"; --One Day

  private final JacksonMongoCollection<Product> productCollection;

  public ProductController(MongoDatabase database) {
    productCollection = JacksonMongoCollection.builder().build(
        database,
        "products",
        Product.class,
        UuidRepresentation.STANDARD);
  }

  public void getProducts(Context ctx) {
    Bson combinedFilter = constructFilter(ctx);

    // All three of the find, sort, and into steps happen "in parallel" inside the
    // database system. So MongoDB is going to find the products with the specified
    // properties, return those sorted in the specified manner, and put the
    // results into an initially empty ArrayList.
    ArrayList<Product> matchingProducts = productCollection
      .find(combinedFilter)
      .into(new ArrayList<>());

    // Set the JSON body of the response to be the list of products returned by
    // the database.
    ctx.json(matchingProducts);
  }

  private Bson constructFilter(Context ctx) {
    List<Bson> filters = new ArrayList<>(); // start with a blank document

    if (ctx.queryParamMap().containsKey(NAME_KEY)) {
        filters.add(eq(NAME_KEY, ctx.queryParam(NAME_KEY)));
    }

    // Combine the list of filters into a single filtering document.
    Bson combinedFilter = filters.isEmpty() ? new Document() : and(filters);

    return combinedFilter;
  }
}
