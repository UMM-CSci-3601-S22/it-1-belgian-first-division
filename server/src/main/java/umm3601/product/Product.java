package umm3601.product;

import org.mongojack.Id;
import org.mongojack.ObjectId;

@SuppressWarnings({"VisibilityModifier"})
public class Product {

  @ObjectId @Id

  @SuppressWarnings({"MemberName"})
  public String _id;

  public String productName;
  public String description;
  public String brand; // brand can be empty.
  public String category;
  public String store;
  public String location;
  public String notes; // can be empty
  public String[] tags;

  /*
  public ImageIcon image; // this might not be the correct type for an image.
  This also made the tests fail.  I don't know how the other groups are doing this.
  */

}
