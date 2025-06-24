def select_model(pattern_1, pattern_2):
    if pattern_1 == "Anxious" and pattern_2 == "Avoidant":
        return "rescue_loop_model"
    if pattern_1 == "Burnt" and pattern_2 == "Idealist":
        return "echo_chamber_model"
    if pattern_1 == "Silent" and pattern_2 == "Expressive":
        return "misalignment_model"
    if pattern_1 == pattern_2:
        return "mirror_trap_model"
    return "default_model"
