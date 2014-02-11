function decEqual(actual, expected, tolerance, message) {
      ok(Math.abs(actual - expected) <= tolerance, message);
}
