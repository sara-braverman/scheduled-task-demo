# scheduled-task-demo

A small shopping-cart module used to demo a Claude Code Scheduled Task that reviews every new pull request.

## Review checklist

Every pull request must pass these checks:

1. No `console.log` or other debug output
2. No secrets, passwords or API keys in code
3. Every new exported function has a test in `tests/`
