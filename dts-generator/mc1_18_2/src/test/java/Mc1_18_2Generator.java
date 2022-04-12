import org.junit.jupiter.api.Test;

public class Mc1_18_2Generator extends CommonBukkitGenerator {

    @Test
    public void generate() {
        this.write("bukkit", "mc1.18.2", this.defaults());
    }
}
