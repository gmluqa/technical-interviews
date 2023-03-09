def is_secure_password(password):
    # At least 8 chars?
    if len(password) < 8:
        return False

    # At least 1 number && uppercase letter?
    has_number = False
    has_uppercase = False
    for character in password:
        if character.isdigit():
            has_number = True
        elif character.isupper():
            has_uppercase = True
        if has_number and has_uppercase:
            break
    if not has_number or not has_uppercase:
        return False
    
    # We load arr with file
    common_passwords = []
    with open("../passwords/common_passwords.txt", "r") as f:
        for line in f:
            common_passwords.append(line.strip())

    # Password isn't in arr?
    if password in common_passwords:
        return False

    # If all verifications passed, the password is secure
    return True