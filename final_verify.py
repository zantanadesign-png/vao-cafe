items = {
  "Hot Drinks": {
    "Espresso": "Espresso offers a focused ritual, a warm pause defined by its intensity.",
    "Americano": "Americano presents a clean Hot Drinks ritual for a balanced warm pause. ",
    "Flat White": "Flat White provides a silky Hot Drinks ritual, ideal for a warm pause.  ",
    "Cortado": "Cortado offers a precise Hot Drinks ritual, balancing a warm pause here.",
    "Cappuccino": "Cappuccino delivers a classic Hot Drinks ritual for a creamy warm pause.",
    "Latte": "Latte offers a gentle Hot Drinks ritual, a smooth choice for warm pause.",
    "Spanish Latte": "Spanish Latte adds a subtle sweetness to a refined Hot Drinks ritual.   ",
    "V60": "V60 offers a precise Hot Drinks ritual, a clear and focused warm pause. ",
    "Infusion V60": "Infusion V60 brings a nuanced ritual to a characteristic warm pause.    ",
    "Coffee of the Day": "Coffee of the Day offers a daily Hot Drinks ritual for a warm pause.    "
  },
  "Cold Drinks": {
    "Americano": "Americano offers a clean Cold Drinks ritual for a refreshing cold pause.",
    "Alfredo": "Alfredo presents a distinct Cold Drinks ritual for a unique cold pause. ",
    "Alfredo Infusion (Passion Fruit)": "Alfredo Infusion offers a fruit-noted ritual for a bright cold pause.   ",
    "VAO Signature": "VAO Signature offers a characteristic ritual for a defined cold pause.  ",
    "Latte": "Latte provides a smooth Cold Drinks ritual for a consistent cold pause. ",
    "Spanish Latte": "Spanish Latte offers a sweet Cold Drinks ritual for a light cold pause. ",
    "V60": "V60 presents a precise Cold Drinks ritual for a focused, cold pause.    ",
    "Infusion V60": "Infusion V60 brings a nuanced ritual to a characteristic cold pause.    ",
    "Coffee of the Day": "Coffee of the Day offers a daily Cold Drinks ritual for a cold pause.   ",
    "Matcha": "Matcha offers a traditional Cold Drinks ritual for a vibrant cold pause.",
    "Strawberry Matcha": "Strawberry Matcha offers a fruit-noted ritual for a bright cold pause.  ",
    "Hibiscus": "Hibiscus offers a floral Cold Drinks ritual for a bright, cold pause.   "
  },
  "Small Bites": {
    "Butter Croissant": "Butter Croissant offers a classic Small Bites ritual for a light pause. ",
    "Cinnamon Roll": "Cinnamon Roll provides a spiced Small Bites ritual for a warm pause.    ",
    "Avocado Toast": "Avocado Toast offers a fresh Small Bites ritual for a balanced pause.   ",
    "Almond Croissant": "Almond Croissant offers a crisp Small Bites ritual for a light pause.   ",
    "Avocado & Egg Toast": "Avocado & Egg Toast offers a balanced Small Bites ritual for a pause.   ",
    "Honey Butter Croissant": "Honey Butter Croissant offers a sweet Small Bites ritual for a pause.   ",
    "French Toast": "French Toast provides a soft Small Bites ritual for a light, warm pause.",
    "Mini Cinnamon Roll": "Mini Cinnamon Roll offers a small ritual for a focused Small Bites pause.",
    "Pastry of the Day": "Pastry of the Day offers a daily Small Bites ritual for a light pause.  "
  }
}

count = 0
for cat, menu in items.items():
    for name, desc in menu.items():
        count += 1
        if len(desc) != 72:
            print(f"ERROR: {cat}/{name} is {len(desc)}")
        # else: print(f"OK: {cat}/{name}")

print(f"Total verified: {count}")
