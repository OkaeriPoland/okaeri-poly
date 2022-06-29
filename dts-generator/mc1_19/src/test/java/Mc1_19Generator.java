import org.junit.jupiter.api.Test;

public class Mc1_19Generator extends CommonBukkitGenerator {

    @Test
    public void generate() {
        this.write("bukkit", "mc1.19", this.defaults());
    }
}
