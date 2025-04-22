import pool from "./db";

async function seed() {
  try {
    await pool.query(`CREATE TABLE swift_codes (
  swift_code VARCHAR(11) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),                  -- Address of the location
  bank_id INT REFERENCES countries(id) ON DELETE CASCADE,  -- Foreign key referencing countries
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp for creation (optional)
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP   -- Timestamp for updates (optional)
);`);

    // Insert sample data
    await pool.query(`
      INSERT INTO users (name, email) VALUES
        ('Alice', 'alice@example.com'),
        ('Bob', 'bob@example.com')
      ON CONFLICT (email) DO NOTHING;
    `);

    console.log("✅ Seed complete");
  } catch (err) {
    console.error("❌ Seed error:", err);
  } finally {
    await pool.end();
  }
}

seed();
