import org.junit.jupiter.api.Test;

public class Mc1_17_1Generator extends CommonBukkitGenerator {

    @Test
    public void generate() {
        this.write("bukkit", "mc1.17.1", this.defaults());
    }
}
