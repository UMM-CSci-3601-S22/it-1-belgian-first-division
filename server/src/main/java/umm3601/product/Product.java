package umm3601.product;

import org.mongojack.Id;
import org.mongojack.ObjectId;

@SuppressWarnings({"VisibilityModifier"})
public class Product {

  @ObjectId @Id
  String _id;

  String name;
  String brand; // brand can be empty.
  Double quantity; // can be 0
  String comment; // can be empty

}
