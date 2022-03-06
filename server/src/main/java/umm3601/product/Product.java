package umm3601.product;

import org.mongojack.Id;
import org.mongojack.ObjectId;

@SuppressWarnings({"VisibilityModifier"})
public class Product {

  @ObjectId @Id

  @SuppressWarnings({"MemberName"})
  public String _id;

  @SuppressWarnings({"MemberName"})
  public String product_name; // required

  public String description; // Can empty
  public String brand; // brand can be empty.
  public String category; // Can be empty
  public String store; // Assume it's not empty
  public String location; // Assume it's not empty
  public String notes; // can be empty
  public int lifespan; // can be empty
  public int threshold; // can be empty

}
