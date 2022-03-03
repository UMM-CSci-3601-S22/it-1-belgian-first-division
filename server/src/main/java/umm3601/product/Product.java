package umm3601.product;

import org.mongojack.Id;
import org.mongojack.ObjectId;

@SuppressWarnings({"VisibilityModifier"})
public class Product {

  @ObjectId @Id
  public String _id;

  public String name;
  public String brand; // brand can be empty.
  public Double quantity; // can be 0
  public String comment; // can be empty

}
