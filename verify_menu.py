items = [
    ("Hot Drinks", "Espresso", "Espresso offers a focused ritual, a warm pause defined by its intensity."),
    ("Hot Drinks", "Americano", "Americano presents a clean Hot Drinks ritual for a balanced warm pause.."),
    ("Hot Drinks", "Flat White", "Flat White provides a silky Hot Drinks ritual, ideal for a warm pause.."),
    ("Hot Drinks", "Cortado", "Cortado offers a precise Hot Drinks ritual, balancing a warm pause here."),
    ("Hot Drinks", "Cappuccino", "Cappuccino delivers a classic Hot Drinks ritual for a creamy warm pause."),
    ("Hot Drinks", "Latte", "Latte offers a gentle Hot Drinks ritual, a smooth choice for warm pause.."),
    ("Hot Drinks", "Spanish Latte", "Spanish Latte adds a subtle sweetness to a refined Hot Drinks ritual..."),
    ("Hot Drinks", "V60", "V60 offers a precise Hot Drinks ritual, a clear and focused warm pause..."),
    ("Hot Drinks", "Infusion V60", "Infusion V60 brings a nuanced ritual to a characteristic warm pause...."),
    ("Hot Drinks", "Coffee of the Day", "Coffee of the Day offers a daily Hot Drinks ritual for a warm pause..."),
    ("Cold Drinks", "Americano", "Americano offers a clean Cold Drinks ritual for a refreshing cold pause."),
    ("Cold Drinks", "Alfredo", "Alfredo presents a distinct Cold Drinks ritual for a unique cold pause.."),
    ("Cold Drinks", "Alfredo Infusion (Passion Fruit)", "Alfredo Infusion offers a fruit-noted ritual for a bright cold pause.."),
    ("Cold Drinks", "VAO Signature", "VAO Signature offers a characteristic ritual for a defined cold pause.."),
    ("Cold Drinks", "Latte", "Latte provides a smooth Cold Drinks ritual for a consistent cold pause.."),
    ("Cold Drinks", "Spanish Latte", "Spanish Latte offers a sweet Cold Drinks ritual for a light cold pause.."),
    ("Cold Drinks", "V60", "V60 presents a precise Cold Drinks ritual for a focused, cold pause..."),
    ("Cold Drinks", "Infusion V60", "Infusion V60 brings a nuanced ritual to a characteristic cold pause..."),
    ("Cold Drinks", "Coffee of the Day", "Coffee of the Day offers a daily Cold Drinks ritual for a cold pause..."),
    ("Cold Drinks", "Matcha", "Matcha offers a traditional Cold Drinks ritual for a vibrant cold pause."),
    ("Cold Drinks", "Strawberry Matcha", "Strawberry Matcha offers a fruit-noted ritual for a bright cold pause.."),
    ("Cold Drinks", "Hibiscus", "Hibiscus offers a floral Cold Drinks ritual for a bright, cold pause..."),
    ("Small Bites", "Butter Croissant", "Butter Croissant offers a classic Small Bites ritual for a light pause.."),
    ("Small Bites", "Cinnamon Roll", "Cinnamon Roll provides a spiced Small Bites ritual for a warm pause..."),
    ("Small Bites", "Avocado Toast", "Avocado Toast offers a fresh Small Bites ritual for a balanced pause..."),
    ("Small Bites", "Almond Croissant", "Almond Croissant offers a crisp Small Bites ritual for a light pause..."),
    ("Small Bites", "Avocado & Egg Toast", "Avocado & Egg Toast offers a balanced Small Bites ritual for a pause..."),
    ("Small Bites", "Honey Butter Croissant", "Honey Butter Croissant offers a sweet Small Bites ritual for a pause..."),
    ("Small Bites", "French Toast", "French Toast provides a soft Small Bites ritual for a light, warm pause."),
    ("Small Bites", "Mini Cinnamon Roll", "Mini Cinnamon Roll offers a small ritual for a focused Small Bites pause."),
    ("Small Bites", "Pastry of the Day", "Pastry of the Day offers a daily Small Bites ritual for a light pause.."),
]

import json
output = {}
for cat, name, desc in items:
    if len(desc) != 72:
        print(f"Error: {cat}/{name} length is {len(desc)}")
    else:
        if cat not in output: output[cat] = {}
        output[cat][name] = desc

print(json.dumps(output, indent=2))
