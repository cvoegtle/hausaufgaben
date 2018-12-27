package org.voegtle.homework

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController class HomeworkPublisher {
  @GetMapping("/publish") @CrossOrigin(origins = ["*"]) fun publish() {

  }
}