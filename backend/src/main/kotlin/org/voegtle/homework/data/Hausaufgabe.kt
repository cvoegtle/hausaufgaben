package org.voegtle.homework.data

import com.fasterxml.jackson.annotation.JsonIgnore
import com.googlecode.objectify.Key
import com.googlecode.objectify.annotation.Entity
import com.googlecode.objectify.annotation.Id
import com.googlecode.objectify.annotation.Parent
import java.util.Date

@Entity class Hausaufgabe(@Id var id: Long? = null,
                          var fach: Fach?,
                          var aufgabe: String?,
                          var datum: Date?
)