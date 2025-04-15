@Service
public class AuthService {

  @Autowired private UserRepository userRepo;
  @Autowired private PasswordEncoder encoder;
  @Autowired private JwtUtil jwtUtil;

  public String register(User user) {
    user.setPassword(encoder.encode(user.getPassword()));
    userRepo.save(user);
    return "User registered";
  }

  public String login(String username, String password) throws Exception {
    User user = userRepo.findByUsername(username)
                  .orElseThrow(() -> new Exception("User not found"));

    if (!encoder.matches(password, user.getPassword()))
      throw new Exception("Invalid credentials");

    return jwtUtil.generateToken(username);
  }
}
