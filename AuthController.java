@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired private AuthService service;

  @PostMapping("/register")
  public ResponseEntity<String> register(@RequestBody User user) {
    return ResponseEntity.ok(service.register(user));
  }

  @PostMapping("/login")
  public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> data) {
    try {
      String token = service.login(data.get("username"), data.get("password"));
      return ResponseEntity.ok(Collections.singletonMap("token", token));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                           .body(Collections.singletonMap("error", e.getMessage()));
    }
  }
}
