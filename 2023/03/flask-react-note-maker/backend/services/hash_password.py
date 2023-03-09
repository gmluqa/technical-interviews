import hashlib
import os

def hash_password(password):
    # Generate random salt, 16 bytes
    salt = os.urandom(16)
    
    salted_password = salt + password.encode("utf-8")
    
    # Apply the hash function (SHA-256)
    hash_value = hashlib.sha256(salted_password).hexdigest()
    
    # Return the salt and the hash value as a string
    return "{}:{}".format(salt.hex(), hash_value)

