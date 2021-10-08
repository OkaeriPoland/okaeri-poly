import org.junit.jupiter.api.Test;

public class Mc1_16_5Generator extends CommonBukkitGenerator {

    @Test
    public void generate() {
        this.write("bukkit", "mc1.16.5", this.defaults());
    }
}
