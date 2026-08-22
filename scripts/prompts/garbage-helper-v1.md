# MINFO garbage-search helper v1

Translate one Shinjuku City official garbage item into a natural everyday search name for the requested locale.

- Preserve every material, size, power, battery, packaging, contents, appliance, and condition qualifier.
- Return one primary name and at most two safe aliases.
- Do not add disposal advice, categories, fees, schedules, or facts not present in the Japanese item name.
- If the Japanese term cannot be translated safely, retain the source text as the primary name and mark `check_japanese` for later review.
- These are static MINFO multilingual search helpers, never official translations.
