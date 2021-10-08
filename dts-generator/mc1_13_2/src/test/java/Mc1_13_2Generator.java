import org.junit.jupiter.api.Test;

public class Mc1_13_2Generator extends CommonBukkitGenerator {

    @Test
    public void generate() {
        this.write("bukkit", "mc1.13.2", this.defaults());
    }
}
