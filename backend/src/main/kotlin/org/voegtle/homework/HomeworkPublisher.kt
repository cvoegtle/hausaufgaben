package org.voegtle.homework

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.voegtle.homework.data.FormattedDay
import org.voegtle.homework.persistence.loadHomeworkSince
import org.voegtle.homework.processing.HomeworkFormatter
import org.voegtle.homework.processing.daysBefore

@RestController class HomeworkPublisher {
  @GetMapping("/publish") @CrossOrigin(origins = ["*"]) fun publish(days: Long): List<FormattedDay> {
    val hausaufgaben = loadHomeworkSince(daysBefore(days))
    return HomeworkFormatter().format(hausaufgaben)
  }
}