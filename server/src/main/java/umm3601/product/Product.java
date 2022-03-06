package umm3601.product;

import org.mongojack.Id;
import org.mongojack.ObjectId;

@SuppressWarnings({"VisibilityModifier"})
public class Product {

  @ObjectId @Id

  @SuppressWarnings({"MemberName"})
  public String _id;

  @SuppressWarnings({"MemberName"})
  public String product_name;

  public String description;
  public String brand; // brand can be empty.
  public String category;
  public String store;
  public String location;
  public String notes; // can be empty
  public int lifespan;
  public int threshold;
}
