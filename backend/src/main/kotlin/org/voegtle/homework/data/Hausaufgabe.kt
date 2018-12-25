package org.voegtle.homework.data

import com.googlecode.objectify.annotation.Entity
import com.googlecode.objectify.annotation.Id
import com.googlecode.objectify.annotation.Index

@Entity @Index class Hausaufgabe(@Id var id: Long? = null,
                                 var fach: Fach? = null,
                                 var aufgabe: String? = null,
                                 var datum: Long? = null
)