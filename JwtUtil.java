@Component
public class JwtUtil {
  private String secret = "secret_key";

  public String generateToken(String username) {
    return Jwts.builder()
        .setSubject(username)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + 86400000)) // 1 day
        .signWith(SignatureAlgorithm.HS256, secret)
        .compact();
  }

  public String extractUsername(String token) {
    return Jwts.parser().setSigningKey(secret)
        .parseClaimsJws(token).getBody().getSubject();
  }
}
